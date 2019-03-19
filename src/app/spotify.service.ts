import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getSearch(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQDkuGBdwMuXeqEfbi5gzjbmGrtUK2mo1IMq_5nNmvyn6LnGPNlWZwqT1dmQWsuZkSZFA7p_InVDp3KzvgJNNP22Sz87MOXggllcmuEz5AjSyRaqC0HeGiD9zQoDUFQQ1i_ffX1v-CqqoVaALWUF4d0bw-1vnayXEXuHlw"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getSearch(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = `artists/${id}`;
    return this.getAlbum(query);
  }

}
