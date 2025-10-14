export function regexConverter(allowedType: string): RegExp {

    const fileTypes = allowedType.split(',');
  
    let allowedExtensions: RegExp;
    let expersion: string = '';

    for(let i = 0; i < (fileTypes?.length ? fileTypes?.length : 0); i++) {
        if (i === 0) {
            expersion += "(";
        }

        expersion += "\\" + fileTypes?.[i] + (i !== ((fileTypes?.length ? fileTypes?.length : 0) - 1) ? '|' : ')$');
  }

  return allowedExtensions = new RegExp(expersion);
}