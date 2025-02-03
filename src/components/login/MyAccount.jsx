import React from 'react'
import BreadCrumps from '../main/BreadCrumps'

function MyAccount() {
  return (
    <>
      <BreadCrumps page={[
        {
          name: 'My Account',
          slug: 'my-account'
        }
      ]} />

    </>
  )
}

export default MyAccount
