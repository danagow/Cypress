describe('HocLieu-GiaoBaiTap', function(){

	it('HL-GBT_46 - Kiểm tra nhập ký tự đặc biệt tại trường Số lần làm lại khi Giao bài tập',function(){
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

	it('HL-GBT_56 - Kiểm tra nhập số âm tại trường Số lần làm lại khi Giao bài tập',function(){
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
		cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('-1')
		cy.contains('Tạo').click()
		cy.contains('Số lần làm lại phải lớn hơn hoặc bằng 0').should('exist')
	})

	it('HL-GBT_60 - Kiểm tra nhập kí tự đặc biệt trong trường Mô tả khi Giao bài tập',function(){
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
		cy.get(':nth-child(2) > .form-control').clear().type('@~#$^').blur()
		cy.contains('Ký tự không hợp lệ').should('exist')
	})

	it('HL-GBT_77 - Kiểm tra nhập số thực vào trường Số lần làm lại',function(){
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

	it('HL-GBT_61 - Hiện thông báo giao bài tập thành công',function(){
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
		cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(3) > ng-select > div > span').click()
		cy.wait(500)
		cy.contains('Test').click()
		cy.wait(500)
		cy.get('#createAssignmentModal > div > div > form > div.modal-footer > input').click()
		cy.contains('Giao bài tập thành công').should('exist')
	})

	it('DSBT_CSX_6 - Không để trống trường Mô tả trong Chỉnh sửa',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.get('span > .text-dark').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .list-group-item > .row > .col-9 > .text-dark').click()
		cy.wait(1000)
		cy.get('#optionDropdown').click()
		cy.wait(1000)
		cy.get('[data-target="#editAssignmentModal"]').click()
		cy.get('form.ng-valid > .modal-body > :nth-child(1) > .form-control').click().clear()
		cy.contains('Cập nhật').click()
		cy.contains('Trường này không được để trống').should('exist')
	})

		it('DSBT_CSX_8 - Kiểm tra nhập ký tự trường Mô tả',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.get('span > .text-dark').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .list-group-item > .row > .col-9 > .text-dark').click()
		cy.wait(1000)
		cy.get('#optionDropdown').click()
		cy.wait(1000)
		cy.get('[data-target="#editAssignmentModal"]').click()
		cy.get('form.ng-valid > .modal-body > :nth-child(1) > .form-control').click().clear().type('abcDEF123@~\|=')
		cy.get('form.ng-valid > .modal-body > :nth-child(1) > .form-control').should('have.value','abcDEF123@~\|=')
	})

		it('DSBT_CSX_11 - Kiểm tra giá trị mặc định trường Hình thức kiểm tra',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.get('span > .text-dark').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .list-group-item > .row > .col-9 > .text-dark').click()
		cy.wait(1000)
		cy.get('#optionDropdown').click()
		cy.wait(1000)
		cy.get('[data-target="#editAssignmentModal"]').click()
		cy.get(':nth-child(2) > .form-control').should('contain','Làm từng câu')
	})
		it('DSBT_CSX_15 - Kiểm tra nhập giá trị chữ trường Thời gian làm bài',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.get('span > .text-dark').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .list-group-item > .row > .col-9 > .text-dark').click()
		cy.wait(1000)
		cy.get('#optionDropdown').click()
		cy.wait(1000)
		cy.get('[data-target="#editAssignmentModal"]').click()
		cy.get('.col-md-12 > .form-control').click().type('abc').should('empty')
	})

		it('DSBT_CSX_15 - Kiểm tra nhập giá trị số âm trường Thời gian làm bài',function(){
		cy.visit('https://hoclieu.sachmem.vn')
		cy.contains('Đăng nhập').click()
		cy.get('#user_email').type('tamvlm420@gmail.com')
		cy.get('#user_password').type('mngoc3110').type('{enter}')
		cy.url().should('include', 'https://hoclieu.sachmem.vn')
		cy.wait(2000);

		cy.get('span > .text-dark').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .list-group-item > .row > .col-9 > .text-dark').click()
		cy.wait(1000)
		cy.get('#optionDropdown').click()
		cy.wait(1000)
		cy.get('[data-target="#editAssignmentModal"]').click()
		cy.get('.col-md-12 > .form-control').click().type('-1')
		cy.contains('Cập nhật').click()
		cy.contains('Thời gian làm bài phải lớn hơn 0').should('exist')
	})


})
