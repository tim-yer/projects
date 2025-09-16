
import React from 'react'
import {notFound} from "next/navigation";
import {getNewsItem} from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop/modal-backdrop";

const ImagePage = ({params}) => {
    const newsItemSlug = params.id;
    const newsItem = getNewsItem(newsItemSlug);

    if(!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className={'fullscreen-image'}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
}
export default ImagePage
