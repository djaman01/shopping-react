import Header from "./Header/Header"
import HomeGet from "./HomeGet/HomeGet"

import ContextComp from "./ContextComp/ContextComp"

export default function MainContext() {


  return (

    <ContextComp>
      <div>
        <Header />
        <HomeGet />
      </div>
    </ContextComp>
  )
}
