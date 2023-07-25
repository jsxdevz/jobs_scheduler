import { BreeJobs } from '@/types/bree';

export let Jobs = [] as BreeJobs[];
Jobs.push({
    name: '_scheduler',
    interval: 'every 10 seconds'
});
// 	===	bidding Jobs ===
import jsonData from '@/tasks/project1.json';
if (jsonData.length > 0) {
    Jobs.push({
        name: 'project1',
        interval: 'every 5 seconds'
    });
}
// 	===	bidding Jobs ===
