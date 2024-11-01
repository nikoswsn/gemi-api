/** Τα δημόσια στοιχεία μιας Επιχείρησης - μέλος του ΓΕΜΗ */
export interface Company {
  /** Αριθμός ΓΕΜΗ */
  arGemi: string;

  /** ΑΦΜ */
  afm: string;

  /** Επωνυμία (Ελληνικά) */
  coNameEl: string;

  /** Επωνυμίες (με Λατινικούς χαρακτήρες) */
  coNamesEn: string[];

  /** Διακριτικοί τίτλοι (Ελληνικά) */
  coTitlesEl: string[];

  /** Διακριτικοί τίτλοι (με Λατινικούς χαρακτήρες) */
  coTitlesEn: string[];

  /** Δήμος */
  municipality: Municipality;

  /** Νομός */
  prefecture: Prefecture;

  /** Πόλη */
  city: string;

  /** Διεύθυνση: Οδός */
  street: string;

  /** Διεύθυνση: Αριθμός */
  streetNumber: string;

  /** ΤΚ */
  zipCode: string;

  /** Ταχυδρομική θυρίδα */
  poBox?: string;

  /** Web site */
  url?: string;

  /** Αν true, τότε η εταιρεία είναι Υποκατάστημα. Αν false, τότε είναι Μητρική */
  isBranch: boolean;

  /** Σκοπός εταιρείας */
  objective: string;

  /** Νομική μορφή */
  legalType: LegalType;

  /** Τοπική υπηρεσία ΓΕΜΗ */
  gemiOffice: GemiOffice;

  /** Θέματα Αποφάσεων ΓΕΜΗ */
  assemblySubjects: AssemblySubject;

  /** Ημερομηνία σύστασης / ίδρυσης */
  incorporationDate: string;

  /** Ημερομηνία αλλαγής κατάστασης */
  lastStatusChange: string;

  /** Κατάσταση Επιχείρησης */
  status: Status;

  /** Αν false, τότε η εταιρεία δεν έχει ολοκληρώσει την αυτοαπογραφή της */
  autoRegistered: boolean;

  /** Δραστηριότητες Επιχείρησης */
  activities: CompanyActivity[];

  /** Πρόσωπα Επιχείρησης */
  persons: CompanyPerson[];
}

export interface Status {
  /** κωδικός */
  id: number;

  /** περιγραφή */
  descr: string;
}


export interface CompanyDocumentSet {
  /** Αποφάσεις */
  decision: CompanyDocumentDecision[];

  /** Δημοσιεύσεις */
  publication: CompanyDocumentPublication[];
}
export interface CompanyDocumentDecision {
  /** Ημ/νία απόφασης Οργάνου */
  dateAssemblyDecided: string; // Format: date (assumed to be in "YYYY-MM-DD")

  /** Είδος οργάνου */
  assembly: string;

  /** περίληψη θέματος */
  summary: string;

  /** Κωδικός Αριθμός Καταχώρισης */
  kak: string;

  /** Θέμα Απόφασης */
  decisionSubject: string;

  /** Κωδικός Θέματος Απόφασης */
  decisionSubjectID: string;

  /** Ημ/νια Ανακοίνωσης */
  dateAnnounced: string; // Format: date (assumed to be in "YYYY-MM-DD")

  /** Αρχείο Ανακοίνωσης */
  assemblyDecisionUrl?: string; // Optional

  /** Ημ/νια Ολοκλήρωσης Καταχώρισης */
  dateRegistrated: string; // Format: date (assumed to be in "YYYY-MM-DD")
}
export interface CompanyDocumentPublication {
  /** url εγγράφου ΥΜΣ */
  url: string;

  /** Κωδικός Αριθμός Δημοσίευσης ΥΜΣ */
  kad: string;
}
/**	
Στοιχεία συσχετισμού φυσικών και νομικών προσώπων με την εταιρεία
Μόνο ένα από τα personName και businessName είναι μη κενά σε κάθε αντικείμενο, υποδηλώνοντας φυσικό ή νομικό πρόσωπο αντίστοιχα */
export interface CompanyPerson {

  /** στοιχεία φυσικού προσώπου */
  personName?: string; // Optional, only one of personName or businessName should be non-empty

  /** στοιχεία νομικού προσώπου */
  businessName?: string; // Optional, only one of personName or businessName should be non-empty

  /** ρόλος προσώπου στην εταιρεία */
  role: string;

  /** ημερομηνία ισχύος του ρόλου από */
  dtFrom: string; // Format: date (assumed to be in "YYYY-MM-DD")

  /** ημερομηνία ισχύος του ρόλου έως */
  dtTo?: string; // Format: date (assumed to be in "YYYY-MM-DD"); optional

  /** Εκπροσώπηση μεμονωμένα */
  isRepresentativeAlone: boolean;

  /** Εκπροσώπηση από κοινού */
  isRepresentativeInCommon: boolean;
}
export interface CompanyActivity {
  /** πληροφορίες δραστηριότητας */
  activity: {
    /** κωδικός δραστηριότητας (ΚΑΔ) */
    id: string;

    /** περιγραφή δραστηριότητας (ΚΑΔ) */
    descr: string;
  };

  /** τύπος δραστηριότητας για την εταιρεία */
  type: string;

  /** ημερομηνία ισχύος από */
  dtFrom: string; // Format: date (assumed to be in "YYYY-MM-DD")

  /** ημερομηνία ισχύος έως */
  dtTo?: string; // Format: date (assumed to be in "YYYY-MM-DD"); optional
}
export interface Activity {
  /** κωδικός */
  id: string;

  /** περιγραφή */
  descr: string;
}
export interface CompanyStatus {
  /** κωδικός */
  id: number;

  /** περιγραφή */
  descr: string;

  /** Αν η επιχείρηση είναι ενεργή */
  isActive: boolean; // Indicates whether the company is active
}
export interface LegalType {
  /** κωδικός */
  id: number;

  /** περιγραφή */
  descr: string;
}
export interface GemiOffice {
  /** κωδικός */
  id: number;

  /** περιγραφή */
  descr: string;

  /** στοιχεία διεύθυνσης και επικοινωνίας */
  address?: string;

  /** πόλη */
  city?: string;

  /** ΤΚ */
  zipCode?: string;

  /** τηλέφωνο */
  phone?: string;

  /** fax */
  fax?: string; // Optional property

  /** web site */
  url?: string; // Optional property
}
export interface Municipality {
  /** κωδικός */
  id: number;

  /** κωδικός νομού */
  prefectureId?: string;

  /** περιγραφή */
  descr: string;
}
export interface Prefecture {
  /** κωδικός */
  id: number;

  /** περιγραφή */
  descr: string;
}

export interface AssemblySubject {
  /** κωδικός */
  id: number;

  /** περιγραφή */
  descr: string;
}
export interface ErrorEntry {
  /** κωδικός */
  code: string;

  /** περιγραφή */
  message: string;
}
