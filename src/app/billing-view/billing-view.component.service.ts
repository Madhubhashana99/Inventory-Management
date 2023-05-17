import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})

export class BillService {

  pdfList!: any[];

  constructor(private http: HttpClient) { }

  getAllBills() {
    return this.http.get<any[]>('http://localhost:8080/api/billdata/view'); //get bill details
  }

  private apiUrl = 'http://localhost:8080/api/billdata/delete';
  deleteBill(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }


  private pdfUrl = 'http://localhost:8080/api/bill';


  getAllPDFs(): Observable<any[]> {
    const url = `${this.pdfUrl}/view`;
    return this.http.get<any[]>(url).pipe(
      map(pdfList => {
        pdfList.forEach(pdf => {
          pdf.text = this.convertPdfToText(pdf.path);
        });
        return pdfList;
      })
    );
  }

  private convertPdfToText(path: string): string {

    return 'Sample PDF Text';
  }


  }
