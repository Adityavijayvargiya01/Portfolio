import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge';
import { Sun } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center items-center">
      <div className="bg-foreground rounded-2xl w-3/4 lg:w-3/4 h-5/6 lg:h-5/6 p-3">
        <div className="flex bg-background size-full rounded-lg p-8 justify-between overflow-hidden">
          <div className='flex size-fit space-x-3'>
          <Avatar className='size-12'>
            <AvatarImage src="https://avatars.githubusercontent.com/u/111368333?v=4" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Aditya Vijayvargiya
          </h2>
          <Badge>Software Developer</Badge>
          </div>
          <Sun
            size={48}
            className=" text-primary-foreground bg-foreground rounded-full p-2"
            weight="bold"
          />
        </div>
      </div>
    </main>
  );
}
