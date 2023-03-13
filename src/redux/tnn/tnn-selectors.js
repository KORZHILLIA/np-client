const currentTNNInfo = ({ tnn }) => tnn.content.current;
const tnnHistory = ({ tnn }) => tnn.content.totalInfo;
const tnnLoading = ({ tnn }) => tnn.loading;
const tnnError = ({ tnn }) => tnn.error;

const tnnSelectors = { currentTNNInfo, tnnHistory, tnnLoading, tnnError };

export default tnnSelectors;
