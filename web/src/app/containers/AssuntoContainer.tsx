import { connect } from "react-redux";
import { deleteAssunto, deleteAssuntoSuccess, deleteAssuntoFailure } from "chronos-core";
import AssuntoDetail from "../pages/Assunto";

const mapStateToProps = (state: any) => {
    return {
        assuntoOnDetail: state.cronogramas.assuntoOnDetail,
        cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        delete: (id: string, callback: Function) => {
            var promisse = dispatch(deleteAssunto(id))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && (!data.exception || response.status !== "404")) {
                    dispatch(deleteAssuntoSuccess(data));
                    if (callback)
                        callback()
                }
                else {
                    dispatch(deleteAssuntoFailure(data.message));
                }
            });
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssuntoDetail);