import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_FORUM_SELECTION_STATE } from '../../gql/queries';
import TopicList from './TopicList';

const ForumContainer = () => {
    
    const {data, client} = useQuery(GET_FORUM_SELECTION_STATE);
    const activeCat = data ? data.activeCat : "featured"

    const handleClick = (e) => {
        const activeCat = e.target.dataset.activecat;
        console.log(activeCat)
        client.writeData({ data: { ...data, activeCat: activeCat } });
      };
    
    return (
        <div>
        <div className="flex-1 flex"></div>
            <div className="flex flex-col w-10/12">
                <div className="flex text-lg font-medium py-2 mb-8">
                <div
                    className={`${
                    activeCat === "featured" ? "border-b-4 border-pink-500" : ""
                    } cursor-pointer mr-12`}
                    data-activecat="featured"
                    onClick={handleClick}
                >
                    Featured
                </div>
                <div
                    className={`${
                    activeCat === "popular" ? "border-b-4 border-pink-500" : ""
                    } cursor-pointer mr-12`}
                    data-activecat="popular"
                    onClick={handleClick}
                >
                    Popular
                </div>
                <div
                    className={`${
                    activeCat === "recent" ? "border-b-4 border-pink-500" : ""
                    } cursor-pointer mr-12`}
                    data-activecat="recent"
                    onClick={handleClick}
                >
                    Recent
                </div>
                </div>
                {activeCat === "featured" ? (
                    <TopicList />
                    ) : (
                    "Error"
                )}
            </div>
        <div className="flex-1"></div>
        </div>
    )
}

export default ForumContainer;