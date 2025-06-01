import DataTable from 'datatables.net-react';
import DataTablesCore from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-columncontrol-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-select-bs5';
import type { ProductType } from '../../types/products';


DataTable.use(DataTablesCore);

type Props = {
    data: ProductType[],
    columns: Array<any>
}

export const Datatable = ({ data, columns }: Props) => {
  return (
    <DataTable
        columns={columns}
        data={data}
        className="display"
        options={{
            responsive: true,
            select: true
        }}
    />
  )
}
