import { connect } from "react-redux";
import NewDisciplinaForm from "../pages/forms/NewDisciplinaForm";

const mapStateToProps = (state: any) => ({
    novoCronograma: state.cronogramas.novoCronograma,
    cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createDisciplina: (data: any) => {
            // var promisse = dispatch(createDisciplina(data))

            // promisse.payload.then((response: any) => {
            //     const data = response.data;
            //     if (!response.error && !data.exception) {
            //         dispatch(createDisciplinaSuccess(data));
            //     }
            //     else {
            //         dispatch(createDisciplinaFailure(data.message));
            //     }
            // });
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewDisciplinaForm);