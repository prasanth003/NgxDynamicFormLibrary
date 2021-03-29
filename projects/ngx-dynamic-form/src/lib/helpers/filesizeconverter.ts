export function humanFileSize(bytes: number, dp: number = 1): string {
    
    const thresh: number = 1000;
    const units: string[] = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10**dp;

    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }

    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  
  
    return bytes.toFixed(dp) + ' ' + units[u];
  }