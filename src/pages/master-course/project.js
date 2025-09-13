import React from 'react'
import ProjectBanner from '../../components/classManage/ProjectBanner'
// import ProjectType from '../../components/classManage/ProjectType'
import ProjectList from '../../components/classManage/ProjectList'

function project() {
    return (
        <>
            <ProjectBanner />
            {/* <ProjectType /> */}
            <ProjectList />
        </>
    )
}

export default project