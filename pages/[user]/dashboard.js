import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

import withApollo from '../../lib/apollo'
import { ME } from '../../gql/queries';
import Layout from '../../components/Layout/index'
import FoodSearchBox from '../../components/ingredients/FoodSearchBox';
import DashUser from '../../components/DashUser';
import DailyVibe from '../../components/DailyVibe';


const Dashboard = () => {
    const [activeControl, setActiveControl] = useState("journal")
    const { loading, error, data} = useQuery(ME)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const currentDate = new Date(Date.now())

    return (
        <div>
            <Layout>
                <div className="flex">
                    <DashUser data={data} />
                    <div className="flex-1"></div>
                    <div className="flex-1 px-32 self-center">
                        <FoodSearchBox />
                    </div>
                </div>
                <div className="flex bg-mobileFoot">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex justify-around text-lg font-medium py-2">
                        <div 
                            className={`${activeControl === "journal" ? "border-b-2 border-pink-500" : ""} cursor-pointer`}
                            onClick={() => setActiveControl("journal")}
                        >
                            Food Journal
                        </div>
                        <div 
                            className={`${activeControl === "progress" ? "border-b-2 border-pink-500" : ""} cursor-pointer`}
                            onClick={() => setActiveControl("progress")}
                        >
                            Progress
                        </div>
                        <div 
                            className={`${activeControl === "badges" ? "border-b-2 border-pink-500" : ""} cursor-pointer`}
                            onClick={() => setActiveControl("badges")}
                        >
                            Badges
                        </div>
                        <div 
                            className={`${activeControl === "challenges" ? "border-b-2 border-pink-500" : ""} cursor-pointer`}
                            onClick={() => setActiveControl("challenges")}
                        >
                            Challenges
                        </div>
                    </div>
                    <div className="flex flex-1 text-sm justify-end items-center">
                        <div className="pr-32">{currentDate.toLocaleDateString()}</div>
                        {/* Needs reformatting */}
                    </div>
                </div>
                <div className="flex py-4">
                    <DailyVibe />
                    <div className="flex-1"></div>
                    <div className="border border-black mr-32 ml-6">
                        Macro Charts
                    </div>
                </div>

            </Layout>
        </div>
    )
}

export default withApollo(Dashboard)
