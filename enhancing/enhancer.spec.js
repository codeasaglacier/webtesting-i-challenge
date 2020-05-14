const enhancer = require('./enhancer.js');

describe( "jest test", () => {
  it( "runs tests w/o failing", () => {
    expect( false ).toBeFalsy()
  } )
} )

item = {
  name: "Staff of the Fainting Goat",
  durability: 90,
  enhancement: 4
}

describe( "enhancer unit tests", () => {
  it( "repairs item", () => {
    const { repair } = enhancer

    const mewItem = repair( item )
    
    expect( mewItem.durability ).toBe( 100 )
  } )
} )

describe( "enhancer unit tests", () => {
  it( "succeeded enhancement", () => {
    const { succeed } = enhancer
  
    const mewItem = succeed( item )
    
    expect( mewItem.enhancement ).toBe( 5 )
  } )
} )

describe( "enhancer unit tests", () => {
  it( "failed enhancement", () => {
    const { fail } = enhancer
  
    const mewItem = fail( item )
    
    if ( item.enhancement < 15 ) {
      expect( mewItem.durability ).toBe( item.durability - 5 )
    } else if ( item.enhancement >= 15 ) {
      expect( mewItem.durability ).toBe( item.durability -10 ) 
    } else if ( item.enhancement > 16 ) {
      expect( mewItem.enhancement ).toBe( item.enhancement -1 )
    }
  } )
} )

describe( "enhancer unit tests", () => {
  it( "changes item name", () => {
    const { get } = enhancer
  
    const mewItem = get( item )
    
    if ( item.enhancement === 0 ) {
      expect( mewItem.name).toBe( item.name )
    } else if ( item.enhancement > 0 ) {
      expect( mewItem.name ).toBe( item.name ) 
    }
  } )
} )
//"[+4] Staff of the Fainting Goat"