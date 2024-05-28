import { sleep } from '@/lib/utils'
import React from 'react'

const page = async () => {
  // await sleep(2000);
  // throw new Error("my error");
  console.log("before homgPage sleep ...");
  await sleep(4000);
  console.log("after homgPage sleep ...");
  return <div>HomePage</div>;
}

export default page