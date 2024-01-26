import React, { useEffect, useState } from 'react';

const getDogPic: () => Promise<string> = async () => {
  const response: Response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}

export default function DogPics () {
  const [dogPic, setDogPic] = useState<string>('')

  useEffect(() => {
    getDogPic().then(setDogPic)
  }, []);

  return (
    <div className='dog-pics'>
      <img src={dogPic} alt="a very good boi" />
      <button onClick={async () => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
