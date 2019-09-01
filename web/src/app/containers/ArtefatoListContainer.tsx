import { connect } from "react-redux";
import ArtefatoList from "../pages/ArtefatoList";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArtefatoList);