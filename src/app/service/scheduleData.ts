import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,12,1),HomeTeam: 'AJX',
    AwayTeam:'PSG',HomeScore:0,AwayScore:2,
    RefName:'Muhammad',notes:'Pertandingan Hingga Penalti'},
    {id:2,playingDate:new Date(2022,12,11),HomeTeam: 'Manchester United',
    AwayTeam:'PSG',HomeScore:5,AwayScore:1,
    RefName:'Kristo',notes:'Pertandingan FullTime'},
    {id:3,playingDate:new Date(2020,10,13),HomeTeam: 'Aston Villa',
    AwayTeam:'AJAX',HomeScore:3,AwayScore:4,
    RefName:'Alexander',notes:'Pertandingan WAR'},
    {id:4,playingDate:new Date(2021,7,14),HomeTeam: 'AC Milan',
    AwayTeam:'PSG',HomeScore:2,AwayScore:2,
    RefName:'Aditia',notes:'Pertandingan FullTime'},
    {id:5,playingDate:new Date(2022,8,20),HomeTeam: 'Leicester City',
    AwayTeam:'Aston Villa',HomeScore:2,AwayScore:3,
    RefName:'Ahmad',notes:'Pertandingan Hingga Penalti'},
]

export const TEAMS:Team [] = [
    {id:1,name:'PSG',type:'Over 30'},
    {id:2,name:'Manchester United',type:'Over 30'},
    {id:3,name:'AJAX',type:'Over 30'},
    {id:4,name:'AC Milan',type:'Over 30'},
    {id:5,name:'Aston Villa',type:'Over 30'},
    {id:6,name:'Leicester City',type:'Over 30'},
]