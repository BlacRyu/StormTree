export function evaluate_references(json: any) {
  for (const key in json) {
    if (typeof json[key] === 'string') {
      if (json[key].includes('|')) {
        evaluate_string(json[key]);
      } else if (json[key].startsWith('Texture2D')) {
        evaluate_texture(json[key]);
      }
    } else if (typeof json[key] === 'object') {
      evaluate_references(json[key]);
    }
  }
}

function evaluate_string(string: string) {
}

function evaluate_texture(string: string) {
}