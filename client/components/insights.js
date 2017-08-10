import React from 'react'
import {connect} from 'react-redux'
import Chart from './chart'

//COMPONENT

export const Insights = (props) => {
  const {email} = props

  return (
    <div>
      <h3>Hi, {email}</h3>
      <p> Here are your insights </p>
      <Chart />
    </div>
  )
}

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Insights)

