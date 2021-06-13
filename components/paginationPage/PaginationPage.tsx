import Pagination from '@material-ui/lab/Pagination';

type propsCheck = {
    count: number
    handelPagination: Function
    disabled: boolean
}
export default function PaginationPage({ count, handelPagination, disabled }: propsCheck): JSX.Element {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px' }} >

            <Pagination count={count} onChange={(e) => handelPagination(e)} disabled={disabled} />
        </div>
    )
}

