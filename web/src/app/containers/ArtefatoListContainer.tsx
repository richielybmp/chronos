import { connect } from "react-redux";
import ArtefatoList from "../pages/ArtefatoList";

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        // createArtefato: () => { },
        deleteArtefato: () => { }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArtefatoList);