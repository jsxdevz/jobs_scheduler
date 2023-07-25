import express from 'express';
import Bree from 'bree';

import env from '@/configs/env.config';
import { Jobs } from '@/configs/bree.config';

const app = express();
const bree = new Bree({
    jobs: Jobs
});
bree.start();
// Start the server and listen on the specified port
app.listen(env.PORT, async () => {
    console.log(`Server Running ... | Port [${env.PORT}]`);
    console.log(`Jobs List : `, Jobs);
});
