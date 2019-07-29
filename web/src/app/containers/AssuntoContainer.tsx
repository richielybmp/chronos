import { connect } from "react-redux";
import AssuntoDetail from "../pages/Assunto";

const mapStateToProps = (state: any) => {
    return {
        assuntoOnDetail: state.cronogramas.assuntoOnDetail,
        cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssuntoDetail);