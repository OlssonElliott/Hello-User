# Hello-User
inlämningsuppgift
**Utgångspunkt för projektet**

För G:
3st html:
1. index.html **(förstasida)**
2. ManageMembers.html **(formulär för att lägga till medlemmar)**
3. ListMembers.html **(skriv ut alla medlemmar i en lista, här ska man kunna ta bort medlemmar)**

Skapa member klass:
- Innehåller Namn och ålder.
- Setters/Getters.

Lägg till en: **List<Member> members = new Arraylist<>()**

Skapa Controller methods för samtliga html.
-  IndexController **(Visa index.html)**
-  ManageMembersController **(Visa ManageMembers.html, fomulär för att lägga till)**
-  ListMembersController **(Visa hela listan för alla medlemmar)**

-------------------------------------------------------------------------------------------------------------
**Har idag uppfyllt kraven med grundläggande funktionalitet 29/10.** 

- Det finns 3 sidor. Startsida / Listsida / Formulärsida.
- På formulärsidan går det spara nya medlemmar.
- Dem sparade medlemmar sparas i backend, i en ArrayList.
- Från Listsidan går det att ta bort medlemmar.


**Påbörjar nu punkterna för VG.**

-------------------------------------------------------------------------------------------------------------

För VG:
- Skapa en inloggningssida, där admin kan logga in. Inlogg: användarnamn: "admin".  lösenord: "admin".
- Inloggad admin sparas i localstorage, uppdateras sidan är admin fortfarande inloggad.
- På listsidan skall endast inloggad admin kunna ta bort medlem, men alla ska kunna se.
- Formulärssidan skall endast kunna ses och användas av inloggad admin.
- Avgör själv om admin ska ha egna sidor eller dela samma sidor som icke-admin.

**Har idag uppfyllt kraven med grundläggande funktionalitet 31/10.** 

- Det finns inloggningssida för admin, går att logga in med "admin", "admin.
- LocalStorage jämför inmatning för inloggning, admin är inloggad även om sidan laddas om.
- Innehållet på formulärsidan är endast tillgänglig för admin nu, samt länkar till formulärsidan är kopplade till inloggad admin.
- Använder samma sidor till admin och icke admin.

**Ser nu över semantik och kommer lägga till CSS**

-------------------------------------------------------------------------------------------------------------

**Har nu städat upp kommentarer och fixat CSS**