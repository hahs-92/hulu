import Image from 'next/image'
//Icons 
import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
//components
import HeaderItem from './HeaderItem'

const Header = () => {
    return(
        <header className='flex flex-col sm:flex-row justify-between items-center m-5 h-auto'>
            <section className='flex flex-grow justify-evenly  max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>

            </section>
            <section>
                <Image 
                    className='object-contain'
                    src='https://links.papareact.com/ua6'
                    width={200}
                    height={100}
                />
            </section>
        </header>
    )
}

export default Header