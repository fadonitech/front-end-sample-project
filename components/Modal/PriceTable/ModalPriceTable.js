import TableCell from "./TableCell";

const ModalPriceTable = () => (
  <div className="modal__table">
    <th className="modal__table--collumn">
      <tr className="modal__table--collumn-header source-sans-bold text-align-left">FEATURES</tr>
      <TableCell title="3D Model Library" />
      <TableCell title="Custom Models" />
      <TableCell title="24/7 Support" />
      <TableCell title="Commercial Use" />
      <TableCell title="Credit Creator" />
    </th>
    <th className="modal__table--collumn">
      <tr className="modal__table--collumn-header source-sans-bold">14 DAY TRIAL</tr>
      <TableCell val1={true} />
      <TableCell val1={false} />
      <TableCell val1={false} />
      <TableCell val1={false} />
      <TableCell val1={true} />
    </th>
    <th className="modal__table--collumn">
      <tr className="modal__table--collumn-header source-sans-bold">MONTHLY</tr>
      <TableCell val2={true} />
      <TableCell val2={true} />
      <TableCell val2={true} />
      <TableCell val2={true} />
      <TableCell val2={false} />
    </th>
  </div>
)

export default ModalPriceTable;
