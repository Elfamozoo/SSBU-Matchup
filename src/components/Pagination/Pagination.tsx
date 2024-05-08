import {useLocation, useNavigate} from "react-router-dom";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from '@heroicons/react/20/solid'

const Pagination = (props: { countResults: number }) => {
    const calculatePages = () => {
        return Math.ceil(props.countResults / 10);
    }
    const pagesTotal = calculatePages();
    const iteratorArray = Array(pagesTotal)
    const iteratorKeys = iteratorArray.keys()
    const pages = Array.from(iteratorKeys).map(page => {
        return page + 1
    })
    const navigate = useNavigate();
    const location = useLocation();
    const currentQuery = location.search;
    const searchParamsQuery = new URLSearchParams(currentQuery)
    const currentPageString = searchParamsQuery.get("page")
    const currentPageNumber = parseInt(`${currentPageString}`)

    const isDisablePrevious = currentPageNumber == 1;
    const isDisableNext = currentPageNumber == pagesTotal

    const getPagination = () => {
        let pagesLimit: number[] = []
        if (currentPageNumber == 1) {
            pagesLimit = [currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3, currentPageNumber + 4]
        } else if (currentPageNumber == 2) {
            pagesLimit = [currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3]
        } else if (currentPageNumber == pagesTotal) {
            pagesLimit = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber - 1, currentPageNumber]
        } else {
            pagesLimit = [currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2]
        }
        return {
            firstPage: 1,
            lastPage: pagesTotal,
            pages: pagesLimit,
            previousPage: currentPageNumber - 1,
            nextPage: currentPageNumber + 1,
        }
    }
    const buttonsNavigation = getPagination()

    return (
        <>
            <nav className="flex justify-center items-center -space-x-px">
                <button
                    onClick={() => {
                        navigate(`${location.pathname}?page=${buttonsNavigation.firstPage}`)
                    }}
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <ChevronDoubleLeftIcon/>
                </button>
                <button
                    disabled={isDisablePrevious}
                    onClick={() => {
                        navigate(`${location.pathname}?page=${buttonsNavigation.previousPage}`)
                    }}
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <ChevronLeftIcon/>
                </button>
                {buttonsNavigation.pages.map(page => {
                    const isActive = currentPageNumber == page
                    return <button
                        onClick={() => {
                            navigate(`${location.pathname}?page=${page}`)
                        }}
                        type="button"
                        className={`${isActive ? 'min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500' : 'min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'}`}
                        aria-current="page">{page}
                    </button>
                })}
                <button
                    disabled={isDisableNext}
                    onClick={() => {
                        navigate(`${location.pathname}?page=${buttonsNavigation.nextPage}`)
                    }}
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <ChevronRightIcon/>
                </button>
                <button
                    onClick={() => {
                        navigate(`${location.pathname}?page=${buttonsNavigation.lastPage}`)
                    }}
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <ChevronDoubleRightIcon/>
                </button>
            </nav>
        </>
    );
};

export default Pagination;
