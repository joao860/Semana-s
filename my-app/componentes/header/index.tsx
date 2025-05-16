

export default function Header(){
    return (
        <header className="flex px-2 py-4 bg-violet-400 text-white">
            <div className="flex items-center justify-between w-full">
                <div>Menu site</div>


                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>home</li>
                        <li>produto</li>
                    </ul>

                </nav>


            </div>

            
        </header>
    )
  }