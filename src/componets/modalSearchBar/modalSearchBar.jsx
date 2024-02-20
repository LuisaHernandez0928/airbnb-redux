import styles from "./index.module.css";

function ModalSearchBar({
  modalContent,
  showParameterInfo,
  destinationSearch,
  notifyClick,
}) {
  const selectTypeModal = () => {
    if (Number(modalContent)) {
      return styles.estandarModal;
    } else if (destinationSearch === "filter") {
      return styles.filterModal;
    } else if (modalContent === "search") {
      return styles.searchModal;
    }
  };
  return (
    <div onClick={() => notifyClick()} className={selectTypeModal()}>
      {showParameterInfo(modalContent)}
    </div>
  );
}
export { ModalSearchBar };
