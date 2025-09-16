import React from 'react'
import Link from "next/link";

const NewsList = ({news}) => {
    return (
        <ul className={'news-list'}>
            {news.map((news) => (
                <li key={news.id} className={'news-item'}>
                    <Link href={`/news/${news.slug}`}>
                        <img src={`/images/news/${news.image}`} alt={news.title} />
                        <span>{news.title}</span>
                        <span>{news.date}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default NewsList
