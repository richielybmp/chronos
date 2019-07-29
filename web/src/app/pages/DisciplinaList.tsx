import React, { useState } from 'react'
import { Disciplina } from 'chronos-core';
import { EmptyHeader } from '../shared/components/header/EmptyHeader';
import { DisciplinaTab, ConfirmDelete, ModalContainer } from '../shared/components';
import NewDisciplinaFormContainer from '../containers/NewDisciplinaFormContainer';
import NewAssuntoFormContainer from '../containers/NewAssuntoFormContainer';

interface Props {
    disciplinas: Disciplina[],
    matchUrl: any,
    history: any,
    deleteDisciplina: (id: string) => void,
    fetchAssunto: (idDisciplina: string, idAssunto: string) => void,
}

function DisciplinaList(props: Props) {
    const { disciplinas, matchUrl, deleteDisciplina, fetchAssunto } = props

    const hasDisciplinas = disciplinas.length > 0

    //#region States
    const [novaDisciplina, setnovaDisciplina] = useState(false)
    const [confirmationDelete, setConfirmationDelete] = useState(false)

    const [idOnDetail, setidOnDetail] = useState("")
    const [idParaDeletar, setIdParaDeletar] = useState("")
    const [idDisciplinaToCreateSubject, setIdDisciplinaToCreateSubject] = useState("")
    //#endregion

    //#region Handles
    const handleClose = () => {
        setnovaDisciplina(false)
        setidOnDetail("")
        setIdDisciplinaToCreateSubject("")
    }

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleDeletarDisciplina = (id: string) => {
        if (id != null) {
            setConfirmationDelete(true)
            setIdParaDeletar(id)
        }
    }

    const handleUpdateDisciplina = (id: string) => {
        setidOnDetail(id)
    }

    const handleNovaDisciplina = () => {
        setnovaDisciplina(true)
        setidOnDetail("novadisciplina")
    }

    const handelCreateAssunto = (id: string) => {
        setIdDisciplinaToCreateSubject(id)
    }

    const handleAssuntoOnDetail = (idDisciplina: string, idAssunto: string) => {
        fetchAssunto(idDisciplina, idAssunto)
    }
    //#endregion

    const deletarDisciplina = () => {
        if (idParaDeletar) {
            deleteDisciplina(idParaDeletar)
            setConfirmationDelete(false)
            setIdParaDeletar("")
        }
    }

    if (!hasDisciplinas && !novaDisciplina) {
        return (
            <EmptyHeader
                icon='table'
                title='Você ainda não possui nenhuma Disciplina criada'
                subtitle='Adicione disciplinas para podermos começar!'
                btnTitle="Nova disicplina"
                onClick={handleNovaDisciplina}
            />
        )
    }

    return (
        <>
            {/* Modal 'Excluir" */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir a disciplina?"
                toggle={handlePopModalDelete}
                confirmDelete={deletarDisciplina} />

            {showDisciplinaForm(idOnDetail, handleClose)}
            {showAssuntoForm(idDisciplinaToCreateSubject, handleClose)}

            <DisciplinaTab
                disciplinas={disciplinas}
                matchUrl={matchUrl}
                handleDeleteDisciplina={handleDeletarDisciplina}
                handleUpdateDisciplina={handleUpdateDisciplina}
                handleCreateAssunto={handelCreateAssunto}
                handleAssuntoOnDetail={handleAssuntoOnDetail}
                idOnDetail={idOnDetail}
            />

        </>
    )
}

function showDisciplinaForm(idOnDetail: string, handleClose: () => void) {
    if (idOnDetail === "novadisciplina" || idOnDetail !== "") {
        return (
            <ModalContainer show={true} toggle={handleClose}>
                <NewDisciplinaFormContainer close={handleClose} idOnDetail={idOnDetail} />
            </ModalContainer>
        )
    }
}

function showAssuntoForm(idDisciplinaToCreateSubject: string, handleClose: () => void) {
    return (
        <ModalContainer show={idDisciplinaToCreateSubject !== ""} toggle={handleClose}>
            <NewAssuntoFormContainer idOnDetail={idDisciplinaToCreateSubject} />
        </ModalContainer>
    )
}

export default DisciplinaList



// import React, { Component } from 'react'
// import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

// export default class SidebarExampleSidebar extends Component {
//     state = { visible: false }


//     handleShowClick = () => this.setState({ visible: true })
//     handleSidebarHide = () => this.setState({ visible: false })

//     render() {
//         const { visible } = this.state

//         return (
//             <div>
//                 <Button.Group>
//                     <Button disabled={visible} onClick={this.handleShowClick}>
//                         Show sidebar
//           </Button>
//                     <Button disabled={!visible} onClick={this.handleHideClick}>
//                         Hide sidebar
//           </Button>
//                 </Button.Group>

//                 <Sidebar.Pushable as={Segment}>
//                     <Sidebar
//                         as={Menu}
//                         animation='push'
//                         icon='labeled'
//                         inverted
//                         onHide={this.handleSidebarHide}
//                         vertical
//                         visible={true}
//                         width='thin'
//                     >
//                         <Menu.Item>
//                             <a href='#m'>
//                                 <Icon name='home' />
//                                 Home
//               </a>
//                         </Menu.Item>
//                         <Menu.Item as='a'>
//                             <Icon name='gamepad' />
//                             Games
//             </Menu.Item>
//                         <Menu.Item as='a'>
//                             <Icon name='camera' />
//                             Channels
//             </Menu.Item>
//                     </Sidebar>

//                     <Sidebar.Pusher>
//                         <Segment basic>
//                             <div>a</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>b</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>c</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>d</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>e</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>f</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>g</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>h</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>i</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>j</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>k</div>
//                         </Segment>
//                         <Segment basic>
//                             <div>l</div>
//                         </Segment>
//                         <Segment basic>
//                             <div id='m'>m</div>
//                         </Segment>
//                     </Sidebar.Pusher>
//                 </Sidebar.Pushable>
//             </div>
//         )
//     }
// }
