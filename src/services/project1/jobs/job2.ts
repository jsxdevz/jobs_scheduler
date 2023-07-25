import { SchedulerJobs } from '@/types/bree';
import { debugServiceJobs } from '@/utils/index';
const main = async (data: SchedulerJobs) => {
    const status = await debugServiceJobs(data);
    console.log('status', status);
};
export default main;
