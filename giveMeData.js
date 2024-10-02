function hasPermission(db,cat) {
    let result = false
    if (db.includes('*_allow')) {
      result = true
    } 
    if (db.includes('*_deny')) {
      result = false
    }
    if (db.includes(`${cat}_allow`)) {
      result = true
    } 
    if (db.includes(`${cat}_deny`)) {
      result = false
    }
    return result;
  }
  /*
  Parameters:
  db, which is the array of strings that indicate what data there is and if it's allowed or not
  data can be overwritten, which is important to note. So I'm thinking I'll iterate in reverse to check
  
  Return Value:
  a boolean, representing if the attempted query is allowed or not
  
  Examples:
  hasPermission(['food_allow','drinks_deny'],'food') => true
  hasPermission(['food_allow','drinks_deny'],'drinks') => false
  
  Psuedocode:
  First check to see if all permissions are allowed / disallowed
  if so, set result to true / false
  Second check to see if the specific permission is allowed, 
  change the result variable
  Third check to see if it's denied, and set the variable
  */
