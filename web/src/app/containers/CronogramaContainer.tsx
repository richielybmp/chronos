import { connect } from "react-redux";
import CronogramaDetail from "../pages/Cronograma";

const mapStateToProps = (state: any) => {
    return {
        cronogramaOnDetail: state.cronogramas.cronogramaOnDetail
    }
};

export default connect(
    mapStateToProps,
    null,
)(CronogramaDetail);