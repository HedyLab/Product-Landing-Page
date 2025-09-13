import React from 'react'
import ClassManageBanner from '../../components/classManage/ClassManageBanner'
import ClassManageRange from '../../components/classManage/ClassManageRange'
import ClassManageMain from '../../components/classManage/ClassManageMain'
import Process from '../../components/Process'
import ClassManageShare from '../../components/classManage/ClassManageShare'
import CardFunctionList from '../../components/CardFunctionList'

function index() {
  return (
    <>
      <ClassManageBanner />
      <ClassManageRange />
      <ClassManageMain />
      <Process color='Gray' />
      <ClassManageShare />
      <CardFunctionList />
    </>
  )
}

export default index

