import React, { useState } from 'react'
import { CronogramaState } from 'chronos-core';
import ModalNovoCronograma from './modal/ModalNovoCronograma';
import { LoaderComponent, EmptyHeader, CronogramaSubHeader, CronogramaContent } from '../shared/components';
import DisciplinaListContainer from '../containers/DisciplinaListContainer';

interface Props {
    match: any,
    history: any,
    cronogramaOnDetail: CronogramaState,
}

const CronogramaDetail = (props: Props) => {

    const { cronograma, loading } = props.cronogramaOnDetail

    const [modalShowToggle, setmodalShowToggle] = useState(false)

    const handlePopModal = () => {
        setmodalShowToggle(!modalShowToggle)
    }

    const handleCloseModal = () => {
        setmodalShowToggle(false)
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        // <div style={{ height: '-webkit-fill-available' }}>
        <div>
            {/* Modal 'Editar" */}
            <ModalNovoCronograma
                history={props.history}
                show={modalShowToggle}
                toggle={() => handlePopModal()}
                close={() => handleCloseModal()} />

            {
                cronograma != null ? (
                    <>
                        <CronogramaSubHeader descricao={cronograma.descricao} handlePopModal={handlePopModal} />

                        <CronogramaContent cronograma={cronograma}>
                            <DisciplinaListContainer disciplinas={cronograma.disciplinas} matchUrl={props.match} />
                        </CronogramaContent>
                    </>
                ) :
                    <EmptyHeader
                        icon='warning'
                        title='Algo de estranho aconteceu'
                        subtitle='Tente voltar para sua lista de cronogramas'
                        btnTitle='Voltar'
                        linkTo={`/cronogramas`} />
            }
        </div >
    )
}

export default CronogramaDetail;


  // <>
                //     {/* Botão voltar */}
                //     <Grid columns={4}>
                //         <Grid.Column mobile={16} tablet={6} computer={3}>
                //             <Button fluid inverted color='blue' content='Cronogramas' icon='left arrow'
                //                 labelPosition='left' as={Link} to={`../cronogramas`} />
                //         </Grid.Column>
                //     </Grid>
                //     {/* Botões 'Editar' e 'Excluir' */}
                //     <Grid columns={2}>
                //         <Grid.Column mobile={8} tablet={6} computer={3}>
                //             <Button fluid onClick={() => handlePopModal()}
                //                 color='yellow' floated='right' content='Editar' icon='edit'
                //                 labelPosition='right' />
                //         </Grid.Column>
                //         <Grid.Column floated="right" mobile={8} tablet={6} computer={3}>
                //             <Button fluid onClick={() => alert('Not implemented yet')}
                //                 color='red' floated='right' content='Excluir' icon='trash'
                //                 labelPosition='right' />
                //         </Grid.Column>
                //     </Grid>

                //     <Segment>
                //         <Label size='big' attached='top' color='black'>{cronograma.descricao}</Label>
                //         <Grid>
                //             <Grid.Column mobile={16} computer={8}>
                //                 <Header as='h3'>
                //                     <Icon name='calendar' />
                //                     <Header.Content>
                //                         Data início:
                //                 <Header.Subheader>{cronograma.dataInicio.toString()}</Header.Subheader>
                //                     </Header.Content>
                //                 </Header>
                //             </Grid.Column>
                //             <Grid.Column mobile={16} computer={8}>
                //                 <Header as='h3'>
                //                     <Icon name='calendar' />
                //                     <Header.Content>
                //                         Data prevista para término:
                //                 <Header.Subheader>{cronograma.dataFim.toString()}</Header.Subheader>
                //                     </Header.Content>
                //                 </Header>
                //             </Grid.Column>
                //         </Grid>
                //         <Divider />
                //         <DisciplinaListContainer disciplinas={cronograma.disciplinas} matchUrl={props.match} />
                //     </Segment>
                // </>)