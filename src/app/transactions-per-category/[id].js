import React from 'react'

function Transactions() {
    const router = useRouter();
    const { id } = router.query;
  return (
    <div>{id}</div>
  )
}

export default Transactions