import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteSkill,clearVotes } from '../../portfolio/votationSlice';
import { skills } from '../../sources/work';
import './work.css'


const Work = () => {

  const dispatch = useDispatch();
  const votS = useSelector(voteSkill)

  


  // console.log(votS)

  return (
    <div className='work-section'>
        <h3 className='my-skills-title'>My Skills</h3>
        <br />
        <button className='button-clear' onClick={() => dispatch(clearVotes())}>Clear</button>
        <br />

        <div className='container-skill'>

          {
            skills.map((skill) => {
              return (
                <div key={skill.id}>
                  <div className='skill-item'>{skill.tool}</div>
                  <div className='container-img'>
                    <img className='img-skill' src={skill.icon} alt="" />
                  </div>
                  <div>
                    Votes: {votS.payload.votation.skills[skill.id].count}
                  </div>
                  <div>
                    <button onClick={() => dispatch(voteSkill(skill.id))} className='button-vote'>Vote!</button>
                  </div>
                </div>
              )
            })
          }

        </div>

    </div>
  )
}

export default Work