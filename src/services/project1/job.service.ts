import { readFileSync } from 'fs';
// import moment from 'moment';
import { checkFileExists } from '@/utils/index';
import { SchedulerJobs } from '@/types/bree';

import Job1 from '@/services/project1/jobs/job1';
import Job2 from '@/services/project1/jobs/job2';
import Job3 from '@/services/project1/jobs/job3';

export const job = async () => {
    const file = `./src/tasks/project1.json`;
    const fileExists = await checkFileExists(file);
    if (fileExists) {
        const rawdata = readFileSync(file, 'utf8');
        const data = JSON.parse(rawdata) as SchedulerJobs[];
        if (data.length > 0) {
            console.log('JOB : project1');
            console.log('data', data);
            data.forEach(async (item) => {
                switch (item.name) {
                    case 'Job1':
                        await Job1(item);
                        break;
                    case 'Job2':
                        await Job2(item);
                        break;
                    case 'Job3':
                        await Job3(item);
                        break;
                    default:
                        break;
                }
            });
        } else {
            console.log('scheduler is null');
        }
    } else {
        console.log('File does not exist, interval job skipped.');
    }
};
