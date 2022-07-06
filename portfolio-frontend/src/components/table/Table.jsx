import { FaEdit,FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../apis/axios"
import './table.scss';

const Table = ({ tableColumns, tableData, deleteItem }) => {


    const handleDelete = (id) => {
        deleteItem(id);
    }

  return (
    <table>
        <thead>
            <tr>
                {tableColumns.map((column, index) => {
                    return (
                        <th key={index}>{column.headerName}</th>
                    );
                })} 
            </tr>
        </thead>
        <tbody>
            {tableData.map((row, index) => {
                return (
                    <tr key={index}>

                        {tableColumns.map((column, i) => {
                            if(column.type === "image")
                                return (
                                    <td key={i}>
                                        <img src={`${BASE_URL}/${row[column.field]}`} alt="" />
                                    </td>
                                );
                            else if(column.type === "link")
                                return (
                                    <td key={i}><a href={row[column.field]} target="_blank" rel="noreferrer">{row[column.field]}</a></td>
                                );
                            else if(column.type === "actions")
                                return (
                                    <td key={i}>
                                        <Link to={`/projects/edit/${row.id}`}><FaEdit className="bx tb-i" /></Link>
                                        <FaTrash className="bx tb-i" onClick={ () => handleDelete(row.id) } />
                                    </td>
                                );
                            else
                            {
                                return (
                                    <td key={i}>{row[column.field]}</td>
                                );
                            }
                        })} 
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default Table