import { connect } from "react-redux";
import { clearError, deleteArtefato, deleteArtefatoSuccess, deleteArtefatoFailure } from "chronos-core";
import Relatorios from "../pages/Relatorios";

const mapStateToProps = (state: any) => {
    return {
        cronogramasState: state.cronogramas.cronogramasList,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Relatorios);