export function base64ToBlob(base64, mime = 'image/jpeg') {
  const byteChars = atob(base64.split(',')[1]);
  const byteArrays = [];

  for (let i = 0; i < byteChars.length; i += 512) {
    const slice = byteChars.slice(i, i + 512);
    const byteNumbers = new Array(slice.length);
    for (let j = 0; j < slice.length; j++) {
      byteNumbers[j] = slice.charCodeAt(j);
    }
    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return new Blob(byteArrays, { type: mime });
}
