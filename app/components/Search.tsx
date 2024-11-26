
import Form from "next/form"
// import {Search} from "lucide-react";

const Search = () => {
    return (
        <div>
                <Form action="/" scroll={false} className="search-input-wrapper">
                <input
                    name="query"
                    defaultValue='hello'
                    className="search-input"
                    placeholder="Search Startups"
                />

                <div className="flex gap-2">
                    {/* {query && <SearchFormReset />} */}

                    <button type="submit" className="search-btn text-white">
                        {/* <Search className="size-5" /> */}
                    </button>
                </div>
            </Form>
        </div>
        
    )
}

export default Search
