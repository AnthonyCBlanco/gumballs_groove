import Pfp from "../assets/crystalpfp.jpg"

export default function Avatar() {
    return (
      <>
        <div className="flex -space-x-1 overflow-hidden">
        <img
          alt="Avatar"
          src={Pfp}
          className="inline-block w-100 h-100 rounded-full ring-2 ring-white"
        />
        </div>
  
      </>
    )
  }
  