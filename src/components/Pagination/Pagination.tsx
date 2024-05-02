import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Pagination = (props: { countResults: number }) => {

    const calculatePages = () => {
        return Math.ceil(props.countResults / 10);
    }
    const iteratorArray = Array(calculatePages())
    const iteratorKeys = iteratorArray.keys()
    const pages = Array.from(iteratorKeys).map(page => {
        return page + 1
    })
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation()
    const urlWithoutLastParameter = new URL(".", window.origin + location.pathname);
    console.log(urlWithoutLastParameter)
    return (
        <>
            <nav className="flex justify-between items-center gap-x-1">
                <button type="button"
                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round"
                         data-darkreader-inline-stroke="">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span aria-hidden="true" className="hidden sm:block">Precedent</span>
                </button>

                <div className="flex items-center gap-x-1">
                    {pages.map(page => (
                        <button onClick={() => {
                            navigate(`${urlWithoutLastParameter.pathname}${page}`)
                        }} type="button"
                                className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                                aria-current="page">{page}
                        </button>
                    ))}
                </div>
                <button type="button"
                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span aria-hidden="true" className="hidden sm:block">Suivant</span>
                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round"
                         data-darkreader-inline-stroke="">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
            </nav>
        </>
    );
};

export default Pagination;
