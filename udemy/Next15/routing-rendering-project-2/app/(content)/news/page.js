
import NewsList from "@/components/news-list/news-list";
import {getAllNews} from "@/lib/news";



const NewsPage = () => {

    const newsData =  getAllNews();
    return (
        <>
            <h1>NewsPage</h1>
            <NewsList news={newsData} />
        </>


    )
}
export default NewsPage
