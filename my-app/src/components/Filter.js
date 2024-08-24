import React from 'react'
import { circular } from '../assests/activities';
import { extracircular } from '../assests/activities'
import { directory } from '../assests/activities';
import '../app.css'
export default function Filter() {
    let CurricularSubjects = directory.CurricularSubjects;
    let Educationfilter = Object.keys(CurricularSubjects);
    let subjectfilters = directory.Filters.SubjectGroup;
    let interestfilter = directory.Filters.Interests
  return (
    <div className='directory'>
    <div className='circular'>
        <div >
            <p>All Circular subjects</p>
            <hr/>
            {circular.UniqueCurricularSubjects.map((sub)=>{
                return (
            <div>
            <input type="checkbox" id={sub} name={sub} value={sub}/>
            <label for={sub}>{sub}</label>
            </div>
            )})}
        </div>
        <hr/>
        <div style={{  marginLeft:'3rem'}}>
            <p>Additional circular subjects</p>
            {circular.UniqueAdditionalSubjects.map((sub)=>{
                return (
            <div>
            <label for={sub}>{sub}</label>
            <input type="checkbox" id={sub} name={sub} value={sub}/>
            </div>
            )})}
        </div>
        </div>
        <hr/>
        <div style={{borderTop:'4px black solid'}}>
        <p>Extra-Circular activities</p>
        <div style={{overflowY:'scroll' , maxHeight:'10rem'}}>
            {extracircular.UniqueExtracurricularActivities.map((sub)=>{
                return (
            <div>
            <input type="checkbox" id={sub} name={sub} value={sub}/>
            <label for={sub}>{sub}</label>
            </div>
            )})}
        </div>
        </div>
        <hr/>
        <div>
        <h2>filter</h2>
        <div className='filters'>
       <div>
       <p>By Educationfilter</p>
            {Educationfilter.map((sub)=>{
                return(
                <div>
            <input type="checkbox" id={sub} name={sub} value={sub}/>
            <label for={sub}>{sub}</label>
            </div>
            )})}
            {/* <hr/> */}
        </div>
        <div>
        <p>By Subject</p>
        {subjectfilters.map((sub)=>{
                return(
                <div>
            <input type="checkbox" id={sub} name={sub} value={sub}/>
            <label for={sub}>{sub}</label>
            </div>
            )})}
        </div>
        {/* <hr/> */}
        <div>
        <p>By Interest</p>
        {interestfilter.map((sub)=>{
                return(
                <div>
            <input type="checkbox" id={sub} name={sub} value={sub}/>
            <label for={sub}>{sub}</label>
            </div>
            )})}
        </div>
        {/* <hr/> */}
    </div>
    </div></div>
  )
}
