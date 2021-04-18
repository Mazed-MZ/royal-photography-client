import React from 'react';
import './Team.css';
import TeamCard from '../TeamCard/TeamCard';


const teamData = [
    {
        name: 'Ellen Von',
        image: 'https://t4.ftcdn.net/jpg/02/12/52/89/360_F_212528953_fw6OrqAfZq9ii4Qbxxa9fBjxhh5eiAcD.jpg',
        tag: 'Photographer'
    },
    {
        name: 'Prito Reja',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6banJrfuP-a-uwDikmgTrCXXG--QKzTQsWg&usqp=CAU',
        tag: 'Photographer'
    },
    {
        name: 'Anna Frank',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPCexSZ1V0yzy5ffKxR8oVEX2OgDuMmUnPQ&usqp=CAU',
        tag: 'Photographer'
    }

]


const Team = () => {
    return (
        <div className='teams'>
            <h1>The Team</h1>
            <div className='row teams'>
                {
                    teamData.map(teamInfo => <TeamCard td={teamInfo}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;