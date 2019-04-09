describe('HocLieu-GiaoBaiTap', function(){

	it('HL-GBT_46',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.contains('Lớp 4').click()
		cy.contains('Luyện tập Tiếng Anh 4 Tập 1').click()
		cy.wait(2000)
		cy.get('.pull-right > .btn').click()
		cy.get(':nth-child(7) > .form-control').type('!@').should('not.have.value','!@')
	})

	it('HL-GBT_56',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.contains('Lớp 4').click()
		cy.contains('Luyện tập Tiếng Anh 4 Tập 1').click()
		cy.wait(2000)
		cy.get('.pull-right > .btn').click()
		cy.wait(2000)
		cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('-1').should('not.have.value','-1')
	})
	it('HL-GBT_60',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.contains('Lớp 4').click()
		cy.contains('Luyện tập Tiếng Anh 4 Tập 1').click()
		cy.wait(2000)
		cy.get('.pull-right > .btn').click()
		cy.wait(2000)
		cy.get(':nth-child(2) > .form-control').type('@~#$^').should('not.have.value','@@~#$^')
	})
	it('HL-GBT_77',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.contains('Lớp 4').click()
		cy.contains('Luyện tập Tiếng Anh 4 Tập 1').click()
		cy.wait(2000)
		cy.get('.pull-right > .btn').click()
		cy.wait(2000)
		cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('1.1').should('not.have.value','1.1')
	})
})
